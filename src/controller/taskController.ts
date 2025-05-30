import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export async function getTasks(req: Request, res: Response) {
  try {
    const userId = req.userId;

    const tasks = await prisma.task.findMany({
      where: { userId },
      orderBy: { dueDate: "asc" },
    });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
}

export async function createTask(req: Request, res: Response) {
  const { title, description, dueDate } = req.body;
  const userId = req.userId;

  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        dueDate: new Date(dueDate),
        userId,
      },
    });
    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao criar tarefa" });
  }
}

export async function updateTask(req: Request, res: Response) {
  const { id } = req.params;
  const { title, description, dueDate, status } = req.body;
  const userId = req.userId;

  try {
    const task = await prisma.task.updateMany({
      where: { id, userId },
      data: {
        title,
        description,
        dueDate: new Date(dueDate),
        status,
      },
    });

    if (task.count === 0) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    res.json({ message: "Tarefa atualizada com sucesso" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao atualizar tarefa" });
  }
}

export async function deleteTask(req: Request, res: Response) {
  const { id } = req.params;
  const userId = req.userId;

  try {
    const task = await prisma.task.deleteMany({
      where: { id, userId },
    });

    if (task.count === 0) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    res.json({ message: "Tarefa deletada com sucesso" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao deletar tarefa" });
  }
}
