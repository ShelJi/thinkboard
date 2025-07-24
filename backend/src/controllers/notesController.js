import Note from "../models/Note.js";

export async function allNotes(req, res) {
	try {
		const notes = await Note.find();
		res.status(200).json({ message: notes });
	} catch (error) {
		console.error("Error", error);
		res.status(500).json({ message: "Internal server error" });
	}
}

export async function singleNotes(req, res) {
	try {
		const singleNote = await Note.findById(req.params.id);
		if (!singleNote) return res.status(404).json({ message: "Note not found" });
		res.status(200).json({ message: singleNote });
	} catch (error) {
		console.error("Error", error);
		res.status(500).json({ message: "Internal server error" });
	}
}

export async function createNote(req, res) {
	try {
		const { title, content } = req.body;
		const newNote = new Note({ title, content });
		await newNote.save();
		res.status(201).json({ message: "Note created succesfully" });
	} catch (error) {
		console.error("Error", error);
		res.status(500).json({ message: "Note not created Internal server error" });
	}
}

export async function updateNote(req, res) {
	try {
		const { title, content } = req.body;
		const updatedNote = await Note.findByIdAndUpdate(
			req.params.id,
			{ title, content },
			{ new: true }
		);
		if (!updatedNote) return res.status(404).json({ message: "Note not found" });
		res.status(200).json(updatedNote);
	} catch (error) {
		console.error("Error", error);
		res.status(500).json({ message: "Note not updated Internal server error" });
	}
}

export async function deleteNote(req, res) {
	try {
		const { title, content } = req.body;
		const delNote = await Note.findByIdAndDelete(req.params.id);
		if (!delNote) return res.status(404).json({ message: "Note not found" });
		res.status(200).json({ message: "Note deleted." });
	} catch (error) {
		console.error("Error", error);
		res.status(500).json({ message: "Note not deleted Internal server error" });
	}
}
