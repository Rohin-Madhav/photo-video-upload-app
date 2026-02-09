const router = require("express").Router();
const upload = require('../middilwares/multer')
const mediaController = require("../controllers/mediaControllers");

router.post("/upload",upload.single("file") ,mediaController.uploadMedia);
router.get("/", mediaController.getAllMedia);
router.get("/view/:id", mediaController.getMediaById);
router.patch("/remove/:id", mediaController.softDelete);

module.exports = router;
