declare module 'react-magic'
declare module 'glightbox'
declare module 'google-maps-react'
declare module 'react-edit-text' {
    import * as React from 'react'

    interface EditTextProps {
        name?: string
        value?: string
        defaultValue?: string
        onSave?: (props: { name: string; value: string }) => void
        placeholder?: string
        style?: React.CSSProperties
        validationMessage?: string
        validation?: (value: string) => boolean
        readonly?: boolean
        [others: string]: any
    }

    interface EditTextareaProps extends EditTextProps {}

    export class EditText extends React.Component<EditTextProps> {}
    export class EditTextarea extends React.Component<EditTextareaProps> {}
}