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
        if (records.length > 0)
            next();
        else {
            res.status(404).json({ errorMessage: "Chapter idd does  not exist" })
        }
    }
    catch {
        res.status(500).json({ errorMessage: "There was a problem looking up chapter id" })
    }
}
