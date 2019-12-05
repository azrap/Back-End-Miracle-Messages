const db = require('../config/dbConfig.js')

module.exports = {
    validateChapterId,
    // verifyChapterData,
    // verifyChapterImgFilename
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


/****************************************************************************/
/*                  Verify chapter image filename is not duplicate                  */
/****************************************************************************/

async function verifyChapterImgFilename(req, res, next) {

    const id = req.params.id;

    if (req.files && req.files.partner_icon) {
        try {
            const iconURL = aws_link + encodeURI(req.files.partner_icon.name);
            const found = await db('partners')
                .select('icon_url')
                .where({ id })
                .first();

            if (found.icon_url !== iconURL) {
                next()
            }
            else {
                res.status(409).json({ errorMessage: "An icon image with this filename already exists" });
            }
        }
        catch {
            res.status(500).json({ errorMessage: " There is a problem checking if icon url exists in database" });
        }
    }
}

// chatpers validation:
// check to see what fields there are in the chapter form/DB object
// make chapter image required, reunion image optional.
//figure out other objects that you want to make required
// fire up the FE to check out the form again
// make reunion image optional but check for duplicates in the db

//chapters-partners-model:




