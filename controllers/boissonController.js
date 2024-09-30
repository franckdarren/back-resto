




exports.getBoissons = async (req, res) => {
    try {
        const boissons = await Boisson.find();
        res.json(boissons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.createBoisson = async (req, res) => {
    const boisson = new Boisson({
        id: req.body.id,
        nom: req.body.nom,
        description: req.body.description,
        prix: req.body.prix,
        image_url: req.body.image_url,
        type: req.body.type,
        categorie_boisson: req.body.categorie_boisson,
    });

    try {
        const newBoisson = await boisson.save();
        res.status(201).json(newBoisson);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.updateBoisson = async (req, res) => {
    try {
        const boisson = await Boisson.findById(req.params.id);
        if (!boisson) return res.status(404).json({ message: 'Boisson non trouvée' });

        boisson.nom = req.body.nom || boisson.nom;
        boisson.description = req.body.description || boisson.description;
        boisson.prix = req.body.prix || boisson.prix;
        boisson.image_url = req.body.image_url || boisson.image_url;
        boisson.type = req.body.type || boisson.type;
        boisson.categorie_boisson = req.body.categorie_boisson || boisson.categorie_boisson;

        const updatedBoisson = await boisson.save();
        res.json(updatedBoisson);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.deleteBoisson = async (req, res) => {
    try {
        const boisson = await Boisson.findById(req.params.id);
        if (!boisson) return res.status(404).json({ message: 'Boisson non trouvée' });

        await boisson.remove();
        res.json({ message: 'Boisson supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
