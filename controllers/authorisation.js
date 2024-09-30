

exports.getAllAutorisations = async (req, res) => {
    try {
        const autorisations = await Autorisation.find();
        res.render('autorisationView', { autorisations });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAutorisationById = async (req, res) => {
    try {
        const autorisation = await Autorisation.findById(req.params.id);
        if (!autorisation) {
            return res.status(404).send('Autorisation non trouvée');
        }
        res.render('autorisationView', { autorisations: [autorisation] });
    } catch (error) {
        res.status(500).send(error);
    }
};
