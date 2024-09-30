import jwt from "jsonwebtoken";

// exports.createAdmin = async (req, res) => {
//     const { pseudo, email, mot_de_passe, role } = req.body;

//     try {
//         const newAdmin = new Admin({ pseudo, email, mot_de_passe, role });
//         await newAdmin.save();

//         res.status(201).json({ message: 'Administrateur créé avec succès', admin: newAdmin });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


exports.loginAdmin = async (req, res) => {
    const { email, mot_de_passe } = req.body;

    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: 'Administrateur non trouvé' });
        }

        const isMatch = await admin.comparePassword(mot_de_passe);
        if (!isMatch) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

      const token = jwt.sign({ id: admin.id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Connexion réussie', token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAdminById = async (req, res) => {
    const { id } = req.params;

    try {
        const admin = await Admin.findById(id);
        if (!admin) {
            return res.status(404).json({ message: 'Administrateur non trouvé' });
        }
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateAdmin = async (req, res) => {
    const { id } = req.params;
    const { pseudo, email, mot_de_passe, role } = req.body;

    try {
        const admin = await Admin.findById(id);
        if (!admin) {
            return res.status(404).json({ message: 'Administrateur non trouvé' });
        }

        admin.pseudo = pseudo || admin.pseudo;
        admin.email = email || admin.email;
        if (mot_de_passe) {
            admin.mot_de_passe = mot_de_passe;
        }
        admin.role = role || admin.role;

        await admin.save();
        res.status(200).json({ message: 'Administrateur mis à jour avec succès', admin });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteAdmin = async (req, res) => {
    const { id } = req.params;

    try {
        const admin = await Admin.findById(id);
        if (!admin) {
            return res.status(404).json({ message: 'Administrateur non trouvé' });
        }

        await admin.remove();
        res.status(200).json({ message: 'Administrateur supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
