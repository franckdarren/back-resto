

exports.getAllUserRoles = async (req, res) => {
    try {
        const userRoles = await UserRole.find();
        res.render('userRoleView', { userRoles });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getUserRoleById = async (req, res) => {
    try {
        const userRole = await UserRole.findById(req.params.id);
        if (!userRole) {
            return res.status(404).send('Association utilisateur-rôle non trouvée');
        }
        res.render('userRoleView', { userRoles: [userRole] });
    } catch (error) {
        res.status(500).send(error);
    }
};
