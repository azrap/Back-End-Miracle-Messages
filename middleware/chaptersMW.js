const db = require('../config/dbConfig.js')

module.exports = {
    validateChapterId,
    checkDupesChapterImg,
    checkDupesReunionImg

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

async function checkDupesChapterImg(req, res, next) {

    if (!req.files) {
        next()
    }
    else if (!req.files.chapter_img) {
        next()
    }

    else {
        try {
            const chapter_img_URL = aws_link + encodeURI(req.files.chapter_img.name);
            const found = await db('chapters')
                .where({ chapter_img_url: chapter_img_URL })
                .orWhere({ reunion_img_url: chapter_img_URL });

            if (found.length == 0) {
                next()
            }
            else {
                res.status(409).json({ errorMessage: "An image with this name already exists, please try again" });
            }
        }
        catch {
            res.status(500).json({ errorMessage: " There is a problem checking if chapter image url exists in database" });
        }
    }
}

/****************************************************************************/
/*                  Verify reunion image filename is not duplicate                  */
/****************************************************************************/

async function checkDupesReunionImg
    (req, res, next) {

    if (!req.files) {
        next()
    }
    else if (!req.files.reunion_img) {
        next()
    }

    else {
        try {
            const reunion_img_URL = aws_link + encodeURI(req.files.reunion_img.name);
            const found = await db('chapters')
                .where({ chapter_img_url: reunion_img_URL })
                .orWhere({ reunion_img_url: reunion_img_URL });


            if (found.length == 0) {
                next()
            }
            else {
                res.status(409).json({ errorMessage: "An image with this filename already exists" });
            }
        }
        catch {
            res.status(500).json({ errorMessage: " There is a problem checking if reunion image url exists in database" });
        }
    }
}









