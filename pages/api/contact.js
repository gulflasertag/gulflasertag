console.log('before');

export default(req, res) => {
    console.log('asd');
    console.log(req.body);
    res.status(200).json(req.body)
}
