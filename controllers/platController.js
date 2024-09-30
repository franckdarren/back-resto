




exports.getPlats = async (req, res) => {
    try {
        const plats = await Plat.find();
        res.json(plats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.createPlat = async (req, res) => {
    const plat = new Plat({
        id: req.body.id,
        nom: req.body.nom,
        description: req.body.description,
        prix: req.body.prix,
        image_url: req.body.image_url,
        categorie: req.body.categorie
    });

    try {
        const newPlat = await plat.save();
        res.status(201).json(newPlat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.updatePlat = async (req, res) => {
    try {
        const plat = await Plat.findById(req.params.id);
        if (!plat) return res.status(404).json({ message: 'Plat non trouvé' });

        plat.nom = req.body.nom || plat.nom;
        plat.description = req.body.description || plat.description;
        plat.prix = req.body.prix || plat.prix;
        plat.image_url = req.body.image_url || plat.image_url;
        plat.categorie = req.body.categorie || plat.categorie;

        const updatedPlat = await plat.save();
        res.json(updatedPlat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.deletePlat = async (req, res) => {
    try {
        const plat = await Plat.findById(req.params.id);
        if (!plat) return res.status(404).json({ message: 'Plat non trouvé' });

        await plat.remove();
        res.json({ message: 'Plat supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
