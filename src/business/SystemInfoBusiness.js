import os from 'os-utils'
import disk from 'diskusage'

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
        return disk.check('/', (err, info) => {
            const diskFree = info.free / (1024 * 1024 * 1024)
            const diskTotal = info.total / (1024 * 1024 * 1024)

            const totalDiskUsagePercent = 100 - (diskFree / diskTotal * 100)
            return `${totalDiskUsagePercent.toFixed(2)}%`
        })
    }

    async getCpuUsage () {
        return os.cpuUsage(v => {
            const cpuUsade = v * 100
            return `${cpuUsade.toFixed(2)}%`
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