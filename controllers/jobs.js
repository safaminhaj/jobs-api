const getAllJobs = async (req, res) => {
  res.send("get all jobs");
};
const getJob = async (req, res) => {
  res.send("get single job");
};
const createJob = async (req, res) => {
  res.send(req.user);
};
const updateJob = async (req, res) => {
  res.send("register user");
};
const deleteJob = async (req, res) => {
  res.send("register user");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
