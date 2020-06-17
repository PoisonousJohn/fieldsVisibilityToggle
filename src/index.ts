export function updateOnSelect(select: JQuery<any>, visibleValue: string, fields: JQuery<any>[]) {
    select.on('change', () => {
        let visible = select.filter(function () {
            let el = jQuery(this)
            return el.is(':checked') || el.is(':selected')
        }).val() === visibleValue

        fields.forEach(element => {
            visible ? element.show() : element.hide()
        })
    })
}
