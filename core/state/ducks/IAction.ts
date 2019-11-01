export default interface IAction {
  error?: boolean;
  meta?: any;
  payload: any;
  type: string;
};
