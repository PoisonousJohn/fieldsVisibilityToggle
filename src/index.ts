export function updateOnSelect(select: JQuery<any>, visibleValue: string, fields: JQuery<any>[]) {
    function updateVisibility(select: JQuery<any>, visibleValue: string, fields: JQuery<any>[]) {
        let visible = select.filter(function () {
            let el = jQuery(this)
            return el.is(':checked') || el.is(':selected')
        }).val() === visibleValue

        fields.forEach(element => {
            visible ? element.show() : element.hide()
        })
    }
    select.on('change', () => { updateVisibility(select, visibleValue, fields) })
    updateVisibility(select, visibleValue, fields)
}
