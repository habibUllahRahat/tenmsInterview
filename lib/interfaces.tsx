export interface Response {
	code: number;
	data: Data;
	error: unknown[];
	message: string;
	payload: unknown[];
	status_code: number;
}

export interface Data {
	slug: string;
	id: number;
	title: string;
	description: string;
	platform: string;
	type: string;
	modality: string;
	old_info: OldInfo;
	start_at: string;
	media: Media[];
	checklist: Checklist[];
	seo: SEO;
	cta_text: CtaText;
	sections: Section[];
	is_cohort_based_course: boolean;
	secondary_cta_group: unknown[];
	delivery_method: string;
}

export interface Checklist {
	color: string;
	icon: string;
	id: string;
	list_page_visibility: boolean;
	text: string;
}

export interface CtaText {
	name: string;
	value: string;
}

export interface Media {
	name: string;
	resource_type: string;
	resource_value: string;
	thumbnail_url: string;
}

export interface OldInfo {
	cat_id: number;
	course_id: number;
	platform: string;
	skills_cat_id: number;
	slug: string;
}

export interface Section {
	type: string;
	name: string;
	description: string;
	bg_color: string;
	order_idx: number;
	values: Value[];
}

export interface thisSection<T> {
	type: string;
	name: string;
	description: string;
	bg_color: string;
	order_idx: number;
	values: T[];
}
export function interfaceGenerator<T>(): thisSection<T> {
	return {} as thisSection<T>;
}
export interface Value {
	background_color?: string;
	background_img?: string;
	checklist_text_color?: string;
	end_at?: Date;
	id?: string;
	start_at?: Date;
	template?: string;
	text?: string;
	description?: string;
	has_instructor_page?: boolean;
	image?: string;
	name?: string;
	short_description?: string;
	slug?: string;
	icon?: string;
	subtitle?: string;
	title?: string;
	background?: Background;
	cta?: Cta;
	description_color?: string;
	thumbnail?: string;
	title_color?: string;
	top_left_icon_img?: string;
	color?: string;
	checklist?: string[];
	file_type?: string;
	file_url?: string;
	video_thumbnail?: string;
	profile_image?: string;
	testimonial?: string;
	thumb?: string;
	video_type?: string;
	video_url?: string;
	answer?: string;
	question?: string;
}

export interface Background {
	image: string;
	primary_color: string;
	secondary_color: string;
}

export interface Cta {
	clicked_url: string;
	color: string;
	text: string;
}

export interface SEO {
	defaultMeta: DefaultMeta[];
	description: string;
	keywords: string[];
	schema: Schema[];
	title: string;
}

export interface DefaultMeta {
	content: string;
	type: string;
	value: string;
}

export interface Schema {
	meta_name: string;
	meta_value: string;
	type: string;
}
export interface MainProductsResponse {
	code: number;
	data: Data;
	error: unknown[];
	message: string;
	payload: unknown[];
	status_code: number;
}

export interface Data {
	products: Product[];
	pagination_meta: PaginationMeta;
}

export interface PaginationMeta {
	total_items: number;
	item_count: number;
	items_per_page: number;
	total_page: number;
	current_page: number;
}

export interface Product {
	title: string;
	id: string;
	slug: string;
	order_idx: number;
	modality: string;
	media: Media[];
	price_type: string;
	is_enrolled: boolean;
	price_details: PriceDetails;
	instructor_text: string;
	checklist: unknown[];
}

export interface Media {
	name: string;
	resource_type: string;
	resource_value: string;
}

export interface PriceDetails {
	min_price: number;
	min_final_price: number;
	max_price: number;
	max_final_price: number;
	text: string;
}
