import os from 'os-utils'
import disk from 'diskusage'
import CustomError from '../helpers/customError.js'

class SystemInfoBusiness {
    async getInfo({ requestInfo }) {

        switch (requestInfo) {
            case 'disk-usage':
                return this.getDiskUsage()
            case 'cpu-usage':
                return this.getCpuUsage()
            case 'free-memory':
                return this.getFreeMem()
            case 'uptime':
                return this.getUpTime()
        }
    }

    async getDiskUsage() {
        return new Promise(resolve => {
            disk.check('/', (err, info) => {
                if (err) throw new CustomError("Erro ao consultar informações do sistema!", 500, err)

                const diskFree = info.free / (1024 * 1024 * 1024)
                const diskTotal = info.total / (1024 * 1024 * 1024)
    
                const totalDiskUsagePercent = 100 - (diskFree / diskTotal * 100)
                resolve(`${totalDiskUsagePercent.toFixed(2)}%`)
            })
        })
    }

    async getCpuUsage () {
        return new Promise(resolve => {
            try {
                os.cpuUsage(v => {
                    const cpuUsade = v * 100
                    resolve(`${cpuUsade.toFixed(2)}%`)
                })
            } catch (err) {
                throw new CustomError("Erro ao consultar informações do sistema!", 500, err)
            }
        })
    }

    getFreeMem() {
        const freeMem = 100 - os.freememPercentage() * 100
        return `${freeMem.toFixed(2)}%`
    }

    async getUpTime() {
        return os.sysUptime()
    }
}

export default new SystemInfoBusiness()