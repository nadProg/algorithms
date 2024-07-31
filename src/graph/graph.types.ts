export type AdjacencySet<Key> = Set<Key>;

export type NodesMap<Key> = Map<Key, AdjacencySet<Key>>;

export type InitEdge<Key> = [Key, Key];
