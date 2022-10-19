export type SignUpRequest = Readonly<{
  id: string;
  name: string;
  email: string;
  password: string;
  isCulqi: boolean;
}>;
