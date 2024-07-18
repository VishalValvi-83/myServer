function gethealth(req, res) {
    res.json({
        status: 'ok',
        message: 'Server is healthy'
    })
}

export  {gethealth}