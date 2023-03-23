import axios from "axios";

export const getAll = async (req, res) => {
    try {
        const { data: users } = await axios.get(
            "http://localhost:3001/users"
        );
        if (users.length === 0) {
            res.send({
                messenger: "Danh sách sản phẩm trống!",
            });

        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).send({
            messenger: error,
        });
    }
}
export const getDetail = async (req, res) => {
    try {
        const { data: users } = await axios.get(
            `http://localhost:3001/users/${req.params.id}`
        );
        if (!users) {
            res.send({
                messenger: "Sản phẩm không tồn tại",
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).send({
            messenger: error,
        });
    }
};

export const create = async (req, res) => {
    try {
        const { data: users } = await axios.post(
            `http://localhost:3001/users/`,
            req.body
        );
        if (!users) {
            res.send({
                messenger: "Thêm sản phẩm thất bại",
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).send({
            messenger: error,
        });
    }
};

export const update = async (req, res) => {
    try {
        const { data: users } = await axios.put(
            `http://localhost:3001/users/${req.params.id}`,
            req.body
        );
        if (!users) {
            res.send({
                messenger: "Cập nhật sản phẩm thất bại",
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).send({
            messenger: error,
        });
    }
};

export const remove = async (req, res) => {
    try {
        await axios.delete(`http://localhost:3001/users/${req.params.id}`);
        return res.send({
            messenger: "Xoá sản phẩm thành công!",
        });
    } catch (error) {
        res.send({
            messenger: error,
        });
    }
};