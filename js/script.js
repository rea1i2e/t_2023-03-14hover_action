jQuery(function ($) {
  const classActive ='is-active';
  const $js_category_item = $(".js-category-item"); // カテゴリ
  const $js_default_category_item = $(".js-category-item[data-category='category1']"); // デフォルトカテゴリ
  const $js_category_item_target = $(".js-category-item-target"); // イメージ
  const $js_default_category_item_target = $(".js-category-item-target[data-target='category1']"); // デフォルトイメージ
  
  // カテゴリーメニューにホバーしたら
  $js_category_item.hover(
    function () {
      let this_category = $(this).data("category"); // ホバーされたカテゴリのdata-categoryの属性値を取得
      $js_category_item.removeClass(classActive); // すべてのカテゴリーから.is-active削除
      $(this).addClass(classActive); // ホバー中のカテゴリーに.is-active追加
      $js_category_item_target.removeClass(classActive); // すべてのイメージから.is-active削除
      $js_category_item_target.filter(`[data-target=${this_category}]`).addClass(classActive); // ホバー中のカテゴリーに対応するイメージに.is-active追加
    },
    function () {
      $js_category_item.removeClass(classActive);
      $js_default_category_item.addClass(classActive);
      $js_category_item_target.removeClass(classActive);
      $js_default_category_item_target.addClass(classActive);
    }
  );  
});
