

exports.getAllContenir = (req, res) => {
    Contenir.getAll((error, contenirs) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.render('contenirView', { contenirs });
    });
};

exports.getContenirById = (req, res) => {
    const id = req.params.id;
    Contenir.getById(id, (error, contenir) => {
        if (error) {
            return res.status(500).send(error);
        }
        if (!contenir) {
            return res.status(404).send('Association non trouvée');
        }
        res.render('contenirView', { contenirs: [contenir] });
    });
};
