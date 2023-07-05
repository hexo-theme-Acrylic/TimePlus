const logger = require('hexo-log')()

hexo.on('ready', () => {
  const { version } = require('../../package.json')
  logger.info(`
  ===================================================================
                                                                     
      ████████╗██╗███╗   ███╗███████╗██████╗ ██╗     ██╗   ██╗███████╗
      ╚══██╔══╝██║████╗ ████║██╔════╝██╔══██╗██║     ██║   ██║██╔════╝
         ██║   ██║██╔████╔██║█████╗  ██████╔╝██║     ██║   ██║███████╗
         ██║   ██║██║╚██╔╝██║██╔══╝  ██╔═══╝ ██║     ██║   ██║╚════██║
         ██║   ██║██║ ╚═╝ ██║███████╗██║     ███████╗╚██████╔╝███████║
         ╚═╝   ╚═╝╚═╝     ╚═╝╚══════╝╚═╝     ╚══════╝ ╚═════╝ ╚══════╝
                                                                
                HEXO复刻版 版本: v${version}                       
  ===================================================================`)
})
