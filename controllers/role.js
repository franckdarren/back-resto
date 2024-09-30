

exports.getAllRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.render('roleView', { roles });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getRoleById = async (req, res) => {
    try {
        const role = await Role.findById(req.params.id);
        if (!role) {
            return res.status(404).send('Rôle non trouvé');
        }
        res.render('roleView', { roles: [role] });
    } catch (error) {
        res.status(500).send(error);
    }
};
