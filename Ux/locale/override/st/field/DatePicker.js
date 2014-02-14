Ext.define('Ux.locale.override.st.field.DatePicker', {
    override : 'Ext.field.DatePicker',

    requires : [
        'Ux.locale.override.st.Component'
    ],

    getPicker : function() {
        var picker     = this._picker,
            needLocale = picker && !picker.isPicker;

        picker = this.callParent(arguments);

        if (needLocale && picker.enableLocale) {
            picker.setLocale(Ux.locale.Manager.getLanguage());
        }

        return picker;
    },

    setLocale : function(locale) {
        var me                 = this,
            locales            = me.locales || me.getInitialConfig().locales,
            dateFormat         = locales.dateFormat,
            manager            = me.locale,
            defaultDateFormat  = Ext.util.Format.defaultDateFormat;

        if (dateFormat) {
            if (Ext.isObject(dateFormat)) {
                defaultDateFormat = dateFormat.defaultDateFormat;
                dateFormat        = dateFormat.key;
            }

            dateFormat = manager.get(dateFormat, defaultDateFormat);

            if (Ext.isString(dateFormat)) {
                me.setDateFormat(dateFormat);
            }
        }

        me.callParent(arguments);
    }
});
