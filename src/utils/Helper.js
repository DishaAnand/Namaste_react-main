export function filterData(searchText, restro) {
    return restro.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData
}