export interface FormParams<T> {
    label: string
    initialValue: T
    onChange: (out: T) => void
}