from behave import given, when, then
import requests

@given('ブラウザを起動する')
def step_impl(context):
    # 実際にはブラウザ操作、ここではrequestsで代用
    context.session = requests.Session()

@when('"{url}"にアクセスする')
def step_impl(context, url):
    context.response = context.session.get(url)

@then('ステータスコードが200である')
def step_impl(context):
    assert context.response.status_code == 200, f"Expected 200 but got {context.response.status_code}"