import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Accès interdit, token invalide.' });
            }
            req.user = decoded; // Stocker les infos du token (id, role) dans req.user
            next();
        });
    } else {
        return res.status(401).json({ message: 'Accès non autorisé.' });
    }
};

export default authenticate;
