const db = require('../config/dbConfig.js')

module.exports = {
    validateChapterId,
    verifyChapterData,
    verifyChapterImgFilename
}

const aws_link = "https://labs14-miracle-messages-image-upload.s3.amazonaws.com/";



/****************************************************************************/
/*                        Verify that chapter Id exists - DONE              */
/****************************************************************************/
async function validateChapterId(req, res, next) {
    const id = req.params.id;
    try {
        const records = await db('chapters').where({ id });
        if (records)
            next();
        else {
            res.status(404).json({ errorMessage: `We couldn't find chapter id ${id} in the database` })
        }
    }
    catch {
        res.status(500).json({ errorMessage: `There was a problem looking up chapter id ${id}` })
    }
}
