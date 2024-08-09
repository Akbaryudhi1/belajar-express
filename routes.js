const router = require("express").Router();
// const data = require("./data/data");
const data = [
  {
    id: 1,
    name: "Akbar Yudhi",
  },
  {
    id: 2,
    name: "Akbar Yudhi",
  },
  {
    id: 3,
    name: "Akbar Yudhi",
  },
];

router.get("/", (req, res) => {
  const { page, total } = req.query;
  res.send({
    status: "succesfully",
    message: "welcome to express js",
    page,
    total,
  });
});

router.get("/product/:id", (req, res) => {
  console.log(req.query, "tanda");
  res.json({
    id: req.params.id,
    produk: data,
  });
});

router.post("/product/", (req, res) => {
  res.json(req.body);
});

router.get("/:category/:tag", (req, res) => {
  const { category, tag } = req.params;
  res.json({
    category: category,
    tag: tag,
  });
});

module.exports = router;
