

const {transporter} = require('../services/nodemailer_service');



  exports.setEmail = async (req, res, next) => {
      
    const { to, from, subject, text, html } = req.body;
    const msg = {
        to, 
        from,
        subject, 
        text, 
        html
    };
    try {
      if (![to, from, subject, text, html].includes("")) {
        
       await transporter.sendMail(msg)     
        return res
          .status(200)
          .json({ status: 200, message: "Mensaje enviado con éxito" });
      }
    } catch (err) { 

     console.log(err)
     return res.status(400).json({message: 'Hubo un problema con el envío del correo'})
     
    }
  };


 

