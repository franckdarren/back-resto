




exports.getMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.createMenu = async (req, res) => {
    const menu = new Menu({
        nom: req.body.nom,
        date_time: req.body.date_time,
    });

    try {
        const newMenu = await menu.save();
        res.status(201).json(newMenu);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.updateMenu = async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);
        if (!menu) return res.status(404).json({ message: 'Menu non trouvé' });

        menu.nom = req.body.nom || menu.nom;
        menu.date_time = req.body.date_time || menu.date_time;

        const updatedMenu = await menu.save();
        res.json(updatedMenu);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.deleteMenu = async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);
        if (!menu) return res.status(404).json({ message: 'Menu non trouvé' });

        await menu.remove();
        res.json({ message: 'Menu supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
