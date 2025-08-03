import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  searchGroup: {
    marginBottom: 20,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchControlGroup: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchFormText: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  searchControl: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  searchButton: {
    backgroundColor: "#007AFF",
    borderRadius: 25,
    padding: 12,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  filterGroup: {
    flexDirection: "row",
    gap: 15,
    paddingHorizontal: 10,
  },
  filterContainer: {
    alignItems: "center",
    width: 80,
    height: 60,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    paddingVertical: 8,
  },
  filtersContainer: {
    marginVertical: 15,
  },
  filtersScrollView: {
    paddingVertical: 5,
  },
  filterChip: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  filterChipActive: {
    backgroundColor: "#007AFF",
  },
  filterText: {
    fontSize: 14,
    color: "#333",
  },
  filterTextActive: {
    color: "#fff",
  },
  listingContainer: {
    flex: 1,
    paddingTop: 10,
  },
  listingsContainer: {
    flex: 1,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#007AFF",
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
});
