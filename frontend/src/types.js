/**
 * @typedef PhotoData
 * @prop {string} id
 * @prop {Object} location
 * @prop {string} location.city
 * @prop {string} location.country
 * @prop {Object} urls
 * @prop {string} urls.full
 * @prop {string} urls.regular
 * @prop {Object} user
 * @prop {string} user.id
 * @prop {string} user.username
 * @prop {string} user.name
 * @prop {string} user.profile
 */

/**
 * @typedef {PhotoData & {similar_photos: Object.<string, PhotoData>}} PhotoDataList
 */

/**
 * @typedef  {{id: string, slug: string, title: string}} TopicData
 */
