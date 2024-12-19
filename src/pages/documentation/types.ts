export interface NavItem {
  title: string;
  href: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface DocSubsectionType {
  id: string;
  title: string;
  description: string;
  code?: string;
}

export interface DocSectionType {
  id: string;
  title: string;
  description: string;
  code?: string;
  subsections?: DocSubsectionType[];
}