export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface MethodologyStep {
  step: number;
  title: string;
  duration: string;
  description: string;
}

export interface ValueProp {
  title: string;
  description: string;
}