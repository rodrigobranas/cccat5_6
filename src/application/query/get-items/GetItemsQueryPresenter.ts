import GetItemOutput from "./GetItemOutput";

// Output Boundary
export default interface GetItemsQueryPresenter {
	present(getItemsOutput: GetItemOutput[]): void;
}
