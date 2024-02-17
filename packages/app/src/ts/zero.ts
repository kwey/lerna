import {top} from '@kwe/top';
import {body} from '@kwe/body';
import { IConfig } from '..'
import { Search } from './search'


import { PPX } from './common'

// 此模块建议只做模块的初始化，不做任何逻辑
export class Zero {
	private config: Required<IConfig>
	search!: Search

	constructor(config: Required<IConfig>) {
		this.config = config
		this.init()
        top('')
        body('')
	}

	private init() {
		const { container } = this.config

		container.insertAdjacentHTML('beforeend', this.tpl(PPX))
		const async = container.querySelector(`.${PPX}-async`)

		this.search = new Search(this.config)
	}


	private tpl(PPX: string) {
		return `<div class="${PPX}-async">动态加载模块</div>`
	}
}
