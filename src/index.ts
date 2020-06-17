export function updateOnSelect(select: JQuery<any>, visibleValue: string, fields: JQuery<any>[]) {
    select.on('change', () => {
        let visible = select.val() === visibleValue
        fields.forEach(element => {
            visible ? element.show() : element.hide()
        })
    })
}
