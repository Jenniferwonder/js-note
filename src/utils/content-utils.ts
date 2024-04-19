import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { getCollection } from "astro:content";

export async function getSortedPosts() {
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
	const sorted = allBlogPosts.sort((a, b) => {
		const dateA = new Date(a.data.DateStarted);
		const dateB = new Date(b.data.DateStarted);
		return dateA > dateB ? -1 : 1;
	});

	for (let i = 1; i < sorted.length; i++) {
		sorted[i].data.nextSlug = sorted[i - 1].slug;
		sorted[i].data.nextTitle = sorted[i - 1].data.title;
	}
	for (let i = 0; i < sorted.length - 1; i++) {
		sorted[i].data.prevSlug = sorted[i + 1].slug;
		sorted[i].data.prevTitle = sorted[i + 1].data.title;
	}

	return sorted;
}

export type Tag = {
	name: string;
	count: number;
};

export async function getTagList(): Promise<Tag[]> {
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const countMap: { [key: string]: number } = {};
	allBlogPosts.map((post) => {
		post.data.tags.map((tag: string) => {
			if (!countMap[tag]) countMap[tag] = 0;
			countMap[tag]++;
		});
	});

	// sort tags by tag name
	/* const keys: string[] = Object.keys(countMap).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});
	return keys.map((key) => ({ name: key, count: countMap[key] })); */

	// 💡Get the list by mapping keys first, then sort by number
	const keys: string[] = Object.keys(countMap);
	return keys
		.map((key) => ({ name: key, count: countMap[key] }))
		.sort((a, b) => b.count - a.count);

	// ❌ Sort number value first, then map
	// const values: number[] = Object.values(countMap).sort((a, b) => b - a);
	// const tagList: Tag[] = [];
	// return values.map((v) => {
	// 	tagList.push(
	// 		...getObjectKey(countMap, v).map((key) => ({
	// 			name: key,
	// 			count: countMap[key],
	// 		}))
	// 	);
	// 	return tagList;
	// });
	// return tagList;
	// ❌ Map first, then sort
	// const tagList: Tag[] = Object.values(countMap).map((v)=>{name:})
}
function getObjectKey(obj, value) {
	return Object.keys(obj).filter((key) => obj[key] === value);
}

export type Category = {
	name: string;
	count: number;
};

export async function getCategoryList(): Promise<Category[]> {
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
	const count: { [key: string]: number } = {};
	allBlogPosts.map((post) => {
		if (!post.data.category) {
			const ucKey = i18n(I18nKey.uncategorized);
			count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
			return;
		}
		count[post.data.category] = count[post.data.category]
			? count[post.data.category] + 1
			: 1;
	});

	// const lst = Object.keys(count).sort((a, b) => {
	// 	return a.toLowerCase().localeCompare(b.toLowerCase());
	// });
	const lst = Object.keys(count);

	const ret: Category[] = [];
	for (const c of lst) {
		ret.push({ name: c, count: count[c] });
	}
	ret.sort((a, b) => b.count - a.count);
	return ret;
}