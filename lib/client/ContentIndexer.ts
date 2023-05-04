import * as JsSearch from 'js-search';
import { SearchContent } from '@/interfaces/Markdown.js';
import { getLocalSearchIndex } from './utils';

class ContextIndexer {
	private static instance: ContextIndexer;

	// definite assignment assertion
	private searchEngine!: JsSearch.Search;

	public static get Instance() {
		return this.instance || (this.instance = new this());
	}

	constructor() {
		this.buildIndex();
	}

	public search(query: string): SearchContent[] {
		const results = this.searchEngine.search(query);
		return results as SearchContent[];
	}

	private buildIndex() {
		this.searchEngine = new JsSearch.Search('slug');
		this.searchEngine.addIndex('title');
		this.searchEngine.addIndex('description');
		this.searchEngine.addDocuments(getLocalSearchIndex());
	}
}
export default ContextIndexer.Instance;
