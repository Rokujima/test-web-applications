const { validationResult } = require('express-validator');

function validateRequest(req) {
    const errors = validationResult(req);
    return errors.isEmpty();
}

function isOdd(number){
    return number % 2 == 1;
}

exports.main = async (req, res) => {

    try {

        if (!validateRequest(req)) {
            const validationErrors = validationResult(req).errors.map((x) => x.msg);
            return res.status(400).json({ message: validationErrors });
        }
        
        const { inputNumber } = req.body;

        const check = isOdd(inputNumber) ? 'Your number is Odd' : 'Your number is Even';

        res.status(200).json({ 
            value: inputNumber,
            message: check 
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}