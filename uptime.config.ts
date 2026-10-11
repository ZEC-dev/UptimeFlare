// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "ZEC's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/zec-dev', label: 'GitHub' },
    { link: 'https://zec-cn.pages.dev', label: 'Blog' },
    { link: 'mailto:admin@zec.kdns.fr', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'cfp_monitor',
      name: 'CF-Pages',
      method: 'GET',
      target: 'https://zec-cn.pages.dev',
      tooltip: 'This is a blog page which is based on CF-pages',
      statusPageLink: 'https://zec-cn.pages.dev',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'nas_monitor',
      name: 'nas',
      method: 'GET',
      target: 'https://net.zec.kdns.fr',
      tooltip: 'nas',
      statusPageLink: 'https://net.zec.kdns.fr',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'WordPress_monitor',
      name: 'nas',
      method: 'GET',
      target: 'https://zec.page.gd',
      tooltip: 'nas',
      statusPageLink: 'https://zec.page.gd/wp',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'mc_e',
      name: 'Minecraft JE/BE MiniGame Entry Server',
      method: 'TCP_PING',
      target: 'mc.zec.kdns.fr:25565',
      tooltip: 'Minecraft JE/BE MiniGame Entry Server',
      timeout: 5000,
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }