export interface Joke {
  id: number;
  category: string;
  type: 'single' | 'twopart';
  joke?: string;
  setup?: string;
  delivery?: string;
  language: string;
}

export interface Translation {
  translations: TranslationElement[];
}

export interface TranslationElement {
  detected_source_language: string;
  text:                     string;
}
