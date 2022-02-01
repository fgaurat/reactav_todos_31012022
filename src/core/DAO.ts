export interface DAO{
    getAll():Promise<Todo[]>;
}