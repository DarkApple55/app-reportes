import sql from 'mssql'
import config from '../../dbconfig-env.js'

class EdificioService {
    getAll = async () => {
        let returnArray = null
        try {
            let pool = sql.connect(config)
            let result = await pool.request().query("SELECT * from Edificios")
            returnArray = result.recordsets[0]
        }
        catch (error) {
            console.log(error)
        }
        return returnArray
    }
}

export default EdificioService

