const db = require('../../data/db-config');

const getAll = () => {
  return db('accounts');

}

const getById = id => {
  return db('accounts').where('id', id).first()
}

const create = async account => {
  // return db('accounts').insert(account, ['id'])
  const [id] = await db('accounts').insert(account)
  return getById
}

const updateById = async (id, account) => {
  await db('accounts').where('id', id).update(account)
  return getById(id)
}

const deleteById = id => {
  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
