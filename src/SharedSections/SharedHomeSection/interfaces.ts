export interface ISharedHomeSectionProps<T> {
    itemsList: T[]
    itemRender: any
    withViewAllButton: boolean
    title: string
    topIcon: string
    onViewAllClick?: (e: any) => void
    onItemClick?: (itemId: string) => void
}